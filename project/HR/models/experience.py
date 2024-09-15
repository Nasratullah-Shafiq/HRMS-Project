from django.db import models
from HR.models.address import Country, Province
from HR.models.organization import Organization
from HR.models.department import Department

class Status(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class OrganizationType(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class JobPosition(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Grade(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class Step(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Experience(models.Model):
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    province = models.ForeignKey(Province, on_delete=models.CASCADE)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    job_position = models.ForeignKey(JobPosition, on_delete=models.CASCADE)
    grade = models.ForeignKey(Grade, on_delete=models.CASCADE)
    step_id = models.ForeignKey(Step, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    status_id = models.ForeignKey(Status, on_delete=models.CASCADE)
    job_start_data = models.DateField()
    job_end_date = models.DateField()
    organization_type = models.ForeignKey(OrganizationType, on_delete=models.CASCADE)
    remarks = models.CharField(max_length=255)

    def __str__(self):
        return f"Education in {self.country}"
    
    def __str__(self):
        return f"Education in {self.province}"