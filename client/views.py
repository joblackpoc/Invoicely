from django.shortcuts import render
from rest_framework import serializers, viewsets
from .serializers import ClientSerializer
from .models import Client
# Create your views here.

class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()

    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)