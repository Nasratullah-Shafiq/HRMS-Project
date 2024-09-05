from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import employeeSerializer
from HR.models.employee import Employee

# Create your views here.

@csrf_exempt
def employeeApi(request, id=0):
    if request.method == 'GET':
        # Get all employees
        employees = Employee.objects.all()
        employee_serializer = employeeSerializer(employees, many=True)
        return JsonResponse(employee_serializer.data, safe=False)
    
    elif request.method == 'POST':
        # Add a new employee
        employee_data = JSONParser().parse(request)
        employee_serializer = employeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Employee Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == "PUT":
        # Update an existing employee
        employee_data = JSONParser().parse(request)
        try:
            employee = Employee.objects.get(id=id)
        except Employee.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        employee_serializer = employeeSerializer(employee, data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == "DELETE":
        # Delete an employee
        try:
            employee = Employee.objects.get(id=id)
        except Employee.DoesNotExist:
            return JsonResponse("Employee not found", safe=False, status=404)

        employee.delete()
        return JsonResponse("Deleted Successfully", safe=False)
