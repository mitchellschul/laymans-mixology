from django.db import models

# Create your models here.
class ingredientList(models.Model):
    ingredients = models.JSONField(default=None)
    def __str__(self):
        return self.ingredients
    
class drinkList(models.Model):
    drinks = models.JSONField()
    def __str__(self):
        return self.drinks
    
class savedDrinksList(models.Model):
    drinks = models.JSONField()
    def __str__(self):
        return self.drinks