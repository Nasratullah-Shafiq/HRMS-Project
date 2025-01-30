from django.db import models
# Create your models here.



class abc(models.Model):
    name = models.CharField(max_length=10)
    fees = models.CharField(max_length=10)

    def __str__(self):
        return self.name
    


