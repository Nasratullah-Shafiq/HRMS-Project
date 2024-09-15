from django.db import models
from HR.models.address import Country 
# Create your models here.

class Degree(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class University(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Faculty(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Major(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Education(models.Model):

    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    degree = models.ForeignKey(Degree, on_delete=models.CASCADE)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    major = models.ForeignKey(Major, on_delete=models.CASCADE)
    education_start_date = models.DateField()
    education_end_date = models.DateField()
    batch_no = models.CharField(max_length=50)
    education_remarks = models.CharField(max_length=500)

    # def __str__(self):
        # return f"{self.degree} from {self.university} in {self.country}"

    def __str__(self):
        return f"Education in {self.country}"

