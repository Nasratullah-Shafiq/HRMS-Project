from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import OrganizationSerializer
from HR.models.organization import Organization

# Create your views here.

@csrf_exempt
def organizationApi(request, id=0):
    if request.method == 'GET':
        # Get all Organization
        organization = Organization.objects.all()
        organization_serializer = OrganizationSerializer(organization, many=True)
        return JsonResponse(organization_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new employee
        organization_data = JSONParser().parse(request)
        organization_serializer = OrganizationSerializer(data=organization_data)
        if organization_serializer.is_valid():
            organization_serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing Organization
        employee_data = JSONParser().parse(request)
        try:
            organization = Organization.objects.get(id=id)
        except Organization.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        organization_serializer = OrganizationSerializer(organization, data=organization_data)
        if organization_serializer.is_valid():
            organization_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an Organization
        try:
            employee = Organization.objects.get(id=id)
        except Organization.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        organization.delete()
        return JsonResponse("Deleted Successfully", safe=False)
