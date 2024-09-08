from django.db import models
from HR.models.country import Country
from HR.models.province import Province

class Status(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class OrganizationTpye(models.Model):
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
    # country = models.CharField(max_length=50)
    # province = models.CharField(max_length=50)
    organization = models.ForeignKey('HR.Organization', on_delete=models.CASCADE)
    # organization = models.CharField(max_length=50)
    job_position = models.ForeignKey(JobPosition, on_delete=models.CASCADE)
    grade = models.ForeignKey(Grade, on_delete=models.CASCADE)
    step_id = models.ForeignKey(Step, on_delete=models.CASCADE)
    department = models.CharField(max_length=50)
    status_id = models.ForeignKey(Status, on_delete=models.CASCADE)
    job_start_data = models.DateField()
    job_end_date = models.DateField()
    organization_type = models.ForeignKey(OrganizationTpye, on_delete=models.CASCADE)
    remarks = models.CharField(max_length=255)

    def __str__(self):
        return f"Education in {self.country}"
    
    def __str__(self):
        return f"Education in {self.province}"