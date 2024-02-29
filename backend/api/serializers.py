from rest_framework import serializers
from .models import drinkList, ingredientList

class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = drinkList
        fields = '__all__'

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = ingredientList
        fields = '__all__'