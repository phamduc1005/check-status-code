from rest_framework import serializers
from checkStatus.models.ping_test import PingTest
from .ping_test_page_serializer import PingTestPageSerializer

class PingTestSerializer(serializers.ModelSerializer):
    test = serializers.CharField(source = 'test.name')
    class Meta:
        model = PingTest
        fields = ('id', 'test', 'createdAt', 'percentSuccess', 'onlyMain')
        read_only_fields = ('createdAt', 'percentSuccess')
