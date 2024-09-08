from django.contrib import admin
from django.urls import path, re_path
from HR.views.student_view import studentApi  # Import from views.student_view
from HR.views.course_view import courseApi     # Import from views.course_view
from HR.views.employee_view import employeeApi # Import from views.employee_view
from HR.views.health_view import healthApi      # Import from health.view
from HR.views.education_view import educationApi  # Import from education.view

urlpatterns = [
    path('student/', studentApi),  # This handles requests to "Student/"
    re_path(r'^student/([0-9]+)$', studentApi),  # This handles requests to "Student/<id>"
    path('admin/', admin.site.urls),  # Admin route

    path('course/', courseApi),  # This handles requests to "Course/"
    re_path(r'^course/([0-9]+)$', courseApi),  # This handles requests to "Course/<id>"

    path('employee/', employeeApi),  # This handles requests to "employee"
    re_path(r'^employee/([0-9]+)$', employeeApi),  # This handles requests to "Employee/<id>"

    path('health/', healthApi),  # This handles requests to "Health/"
    re_path(r'^health/([0-9]+)$', healthApi),  # This handles requests to "Health/<id>"

    path('education/', educationApi),  # This handles requests to "Education/"
    re_path(r'^education/([0-9]+)$', educationApi),  # This handles requests to "Education/<id>"

]