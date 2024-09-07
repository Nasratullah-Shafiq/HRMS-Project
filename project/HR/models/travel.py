from django.db import models
from HR.models import country
# Create your models here.
class Travel(models.Model):

    country = models.ForeignKey(country, on_delete=models.CASCADE)
    travel_start_date = models.DateField()
    travel_end_date = models.DateField()
    remarks = models.CharField(max_length=255)
