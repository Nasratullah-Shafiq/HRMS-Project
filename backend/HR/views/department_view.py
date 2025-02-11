from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import DepartmentSerializer
from HR.models.department import Department

# Create your views here.

@csrf_exempt
def departmentApi(request, id=0):
    if request.method == 'GET':
        # Get all Departments
        department = Department.objects.all()
        department_serializer = DepartmentSerializer(department, many=True)
        return JsonResponse(department_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new Departement
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing Deapartment
        grade_data = JSONParser().parse(request)
        try:
            department = Department.objects.get(id=id)
        except Department.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        department_serializer = DepartmentSerializer(department, data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an Department
        try:
            department = Department.objects.get(id=id)
        except Department.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        department.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

