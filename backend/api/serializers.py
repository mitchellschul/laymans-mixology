from rest_framework import serializers
from .models import drinkList, ingredientList, savedDrinksList
from django.contrib.auth.models import User

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
        
class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
class FlavorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'