from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import ExperienceSerializer
from HR.serializer import OrganizationTypeSerializer
from HR.models.experience import Experience, OrganizationType

# Create your views here.

@csrf_exempt
def experienceApi(request, id=0):
    if request.method == 'GET':
        # Get all employees
        experience = Experience.objects.all()
        experience_serializer = ExperienceSerializer(experience, many=True)
        return JsonResponse(experience_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new employee
        experience_data = JSONParser().parse(request)
        experience_serializer = ExperienceSerializer(data=experience_data)
        if experience_serializer.is_valid():
            experience_serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing employee
        experience_data = JSONParser().parse(request)
        try:
            employee = Experience.objects.get(id=id)
        except Experience.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        experience_serializer = ExperienceSerializer(experience, data=experience_data)
        if experience_serializer.is_valid():
            experience_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an employee
        try:
            experience = Experience.objects.get(id=id)
        except Experience.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        experience.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def organizationTypeApi(request,id=0):
    if request.method=='GET':
        organization_type = OrganizationType.objects.all()
        organization_type_serializer=OrganizationTypeSerializer(organization_type,many=True)
        return JsonResponse(organization_type_serializer.data,safe=False)
    elif request.method=='POST':
        organization_type_data=JSONParser().parse(request)
        organization_type_serializer=OrganizationTypeSerializer(data=organization_type_data)
        if organization_type_serializer.is_valid():
            organization_type_serializer.save()
            return JsonResponse("Student Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=="PUT":
        organization_type_data=JSONParser().parse(request)
        organization_type=OrganizationType.objects.get(id=id)
        organization_type_serializer=OrganizationTypeSerializer(organization_type_data=organization_type_data)
        if organization_type_serializer.is_valid():
            organization_type_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=="DELETE":
        organization_type=organization_type.objects.get(id=id)
        organization_type.delete()
        return JsonResponse("Deleted Successfully",safe=False)

