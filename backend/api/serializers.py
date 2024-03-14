from rest_framework import serializers
from .models import drinkList, ingredientList, savedDrinksList

class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = drinkList
        fields = '__all__'

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = ingredientList
        fields = '__all__'
        
class SavedDrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = savedDrinksList
        fields = '__all__'