from django.db import models

# Create your models here.
class Employee(models.Model):

    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    travel_start_date = models.DateField()
    travel_end_date = models.DateField()
    remarks = models.CharField(max_length=255)
