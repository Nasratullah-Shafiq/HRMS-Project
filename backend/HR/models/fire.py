from django.db import models

# Create your models here.    
class LeaveReason(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class FireType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Fire(models.Model):

    fire_type_id = models.ForeignKey(FireType, on_delete=models.CASCADE)
    leave_reason = models.ForeignKey(LeaveReason, on_delete=models.CASCADE)
    order_date = models.DateField()
    order_no = models.CharField(max_length=50)
    date_approved = models.DateField()
    fire_remarks = models.CharField(max_length=255)
    