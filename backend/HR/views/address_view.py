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
            province = Province.objects.get(id=id)
        except Province.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        province_serializer = ProvinceSerializer(province, data=province_data)
        if province_serializer.is_valid():
            province_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an Province
        try:
            province = Province.objects.get(id=id)
        except Province.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        province.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def districtApi(request, id=0):
    if request.method == 'GET':
        # Get all District
        district = District.objects.all()
        district_serializer = ProvinceSerializer(district, many=True)
        return JsonResponse(district_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new District
        district_data = JSONParser().parse(request)
        district_serializer = DistrictSerializer(data=district_data)
        if district_serializer.is_valid():
            district_serializer.save()
            return JsonResponse("District Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing District
        district_data = JSONParser().parse(request)
        try:
            district = District.objects.get(id=id)
        except Province.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        district_serializer = DistrictSerializer(district, data=district_data)
        if district_serializer.is_valid():
            district_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an District
        try:
            district = District.objects.get(id=id)
        except District.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        district.delete()
        return JsonResponse("Deleted Successfully", safe=False)