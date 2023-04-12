import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from api.models import Vacancy, Company


# CRUD - CRATE, READ, UPDATE, DELETE

@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [p.to_json() for p in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy = Vacancy.objects.create(name=vacancy_name)
        return JsonResponse(vacancy.to_json())


@csrf_exempt
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_vacancy_name = data.get('name', vacancy.name)
        # desc = data.get('desc', category.desc)
        vacancy.name = new_vacancy_name
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})


def company_list(request):
    # select * from auth_product;
    companies = Company.objects.all()
    companies_json = [p.to_json() for p in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(company.to_json())

def company_vacancy(request, id):
    vacancys = Vacancy.objects.get(id=id)
    companys = Company.objects.filter(vacancy=vacancys.id)
    companies_json = [company.to_json() for company in companys]
    return JsonResponse(companies_json, safe=False)

def top_ten_vacancies(request):
    vacancies = []
    for vacancy in Vacancy.objects.all():
        vacancies.append(vacancy.to_json())
    vacancies = sorted(vacancies, key = lambda x : x['salary'], reverse=True)
    if(vacancies.count != 0):
        return JsonResponse(vacancies[0:11], safe=False, json_dumps_params={'indent':2})
    return JsonResponse({'error': str(e)}, status=400)