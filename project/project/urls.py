from django.contrib import admin
from django.urls import path, re_path
from HR.views.student_view import studentApi  # Import from views.student_view
from HR.views.course_view import courseApi     # Import from views.course_view
from HR.views.employee_view import employeeApi # Import from views.employee_view
from HR.views.health_view import healthApi
urlpatterns = [
    path('student/', studentApi),  # This handles requests to "student/"
    re_path(r'^student/([0-9]+)$', studentApi),  # This handles requests to "student/<id>"
    path('admin/', admin.site.urls),  # Admin route

    path('course/', courseApi),  # This handles requests to "student/"
    re_path(r'^course/([0-9]+)$', courseApi),  # This handles requests to "student/<id>"

    path('employee/', employeeApi),  # This handles requests to "employee"
    re_path(r'^employee/([0-9]+)$', employeeApi),  # This handles requests to "employee/<id>"

    path('health/', healthApi),  # This handles requests to "student/"
    re_path(r'^health/([0-9]+)$', healthApi),  # This handles requests to "student/<id>"

]