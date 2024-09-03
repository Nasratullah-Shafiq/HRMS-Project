from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from HR.serializer import employeeSerializer
# from HR.models.hr_employee import hr_employee
from HR.models.employee import Employee 
# Create your views here.

@csrf_exempt
def employeeApi(request,id=0):
    if request.method=='GET':
        employee = Employee.objects.all()
        employee_serializer=employeeSerializer(employee,many=True)
        return JsonResponse(employee_serializer.data,safe=False)
    elif request.method=='POST':
        employee_data=JSONParser().parse(request)
        employee_serializer=employeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Employee Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=="PUT":
        employee_data=JSONParser().parse(request)
        employee=employee.objects.get(id=id)
        employee_serializer=employeeSerializer(employee,data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.methd=="DELETE":
        employee=employee.objects.get(id=id)
        employee.delete()
        return JsonResponse("Deleted Successfully",safe=False)
