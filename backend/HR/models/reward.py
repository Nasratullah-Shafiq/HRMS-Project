from django.db import models
from HR.models.organization import Organization 
# Create your models here.
class RewardType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Reward(models.Model):

    reward_type = models.ForeignKey(RewardType, on_delete=models.CASCADE)
    amount_of_cash_for_reward = models.IntegerField(max_length=50)
    order_no = models.IntegerField(max_length=50)
    order_date = models.DateField()
    organization_id = models.ForeignKey(Organization, on_delete=models.CASCADE)
    reason = models.CharField(max_length=50)
    