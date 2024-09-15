from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import CountrySerializer, ProvinceSerializer, DistrictSerializer
from HR.models.address import Country, Province, District

# Create your views here.

@csrf_exempt
def countryApi(request, id=0):
    if request.method == 'GET':
        # Get all Country
        country = Country.objects.all()
        country_serializer = CountrySerializer(country, many=True)
        return JsonResponse(country_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new employee
        country_data = JSONParser().parse(request)
        country_serializer = CountrySerializer(data=country_data)
        if country_serializer.is_valid():
            country_serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing Country
        country_data = JSONParser().parse(request)
        try:
            country = Country.objects.get(id=id)
        except Country.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        country_serializer = CountrySerializer(country, data=country_data)
        if country_serializer.is_valid():
            country_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an Country
        try:
            country = Country.objects.get(id=id)
        except Country.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        country.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def provinceApi(request, id=0):
    if request.method == 'GET':
        # Get all Provice
        province = Province.objects.all()
        province_serializer = ProvinceSerializer(province, many=True)
        return JsonResponse(province_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new province
        province_data = JSONParser().parse(request)
        province_serializer = ProvinceSerializer(data=province_data)
        if province_serializer.is_valid():
            province_serializer.save()
            return JsonResponse("province Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing province
        province_data = JSONParser().parse(request)
        try:
            province = Country.objects.get(id=id)
        except Province.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        province_serializer = CountrySerializer(province, data=province_data)
        if province_serializer.is_valid():
            province_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an Country
        try:
            province = Province.objects.get(id=id)
        except Country.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        province.delete()
        return JsonResponse("Deleted Successfully", safe=False)
