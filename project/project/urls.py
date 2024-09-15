from django.contrib import admin
from django.urls import path, re_path
from HR.views.student_view import studentApi  # Import from views.student_view
from HR.views.course_view import courseApi     # Import from views.course_view
from HR.views.employee_view import employeeApi # Import from views.employee_view
from HR.views.health_view import healthApi      # Import from health.view
from HR.views.education_view import educationApi, universityApi, degreeApi, facultyApi, majorApi # Import from education.view
from HR.views.organization_view import organizationApi
from HR.views.address_view import countryApi, provinceApi, districtApi
# from HR.views.department_view import departmentApi  # Import from education.view
# from HR.views.university_view import universityApi # Import from university.view
# from HR.views.faculty_view import facultyApi
# from HR.views.major_view import majorApi
from HR.views.experience_view import experienceApi, organizationTypeApi, statusApi, jobPositionApi, stepApi
# from HR.views.experience_view import 
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

    path('degree/', degreeApi),  # This handles requests to "Education/"
    re_path(r'^degree/([0-9]+)$', degreeApi),  # This handles requests to "Education/<id>"

    path('university/', universityApi),  # This handles requests to "University/"
    re_path(r'^university/([0-9]+)$', universityApi),  # This handles requests to "University/<id>"

    path('faculty/', facultyApi),  # This handles requests to "Faculty/"
    re_path(r'^faculty/([0-9]+)$', facultyApi),  # This handles requests to "Faculty/<id>"

    path('faculty/', majorApi),  # This handles requests to Major/"
    re_path(r'^faculty/([0-9]+)$', majorApi),  # This handles requests to Major Api /<id>"

    path('experience/', experienceApi),  # This handles requests to "Experience/"
    re_path(r'^experience/([0-9]+)$', experienceApi),  # This handles requests to "Experience Api/<id>"

    path('organization/', organizationApi),  # This handles requests to "Organization Type Api/"
    re_path(r'^organization/([0-9]+)$', organizationApi),  # This handles requests to "Organization Type Api/<id>"
    
    path('organization-type/', organizationTypeApi),  # This handles requests to "Organization Type Api/"
    re_path(r'^organization-type/([0-9]+)$', organizationTypeApi),  # This handles requests to "Organization Type Api/<id>"

    path('status/', statusApi),  # This handles requests to Department/
    re_path(r'^status/([0-9]+)$', statusApi),  # This handles requests to "Department Api/<id>"

    path('job-position/', jobPositionApi),  # This handles requests to Job Postion/"
    re_path(r'^job-position/([0-9]+)$', jobPositionApi),  # This handles requests to Job Position Api /<id>"

    path('country/', countryApi),  # This handles requests to Department/"
    re_path(r'^country/([0-9]+)$', countryApi),  # This handles requests to Department Api /<id>"

    path('province/', provinceApi),  # This handles requests to Grade/"
    re_path(r'^province/([0-9]+)$', provinceApi),  # This handles requests to Grade Api /<id>"

    path('district/', districtApi),  # This handles requests to District/"
    re_path(r'^district/([0-9]+)$', districtApi),  # This handles requests to District Api /<id>"

    path('step/', stepApi),  # This handles requests to Step/
    re_path(r'^step/([0-9]+)$', stepApi),  # This handles requests to Step Api /<id>"

    

]