# include<stdio.h>

int main()
{
	int a; // a��� ���� ����
	int b;// b��� ���� ����
	int result;// result��� ���� ����

	a = 100; // 100�� �ǹ̴� ������ �� / 100�� "a"�� ����
	b = 50; // 50�� �ǹ̴� ������ �� / 50�� "b"�� ����
	
	result = a + b;
	printf("%d + %d = %d\n", a, b, result); // ���� ���Ŀ� ���� a, b, result�� �����϶� /
	result = a - b;
	printf("%d - %d = %d\n", a, b, result);
	result = a * b;
	printf("%d * %d = %d\n", a, b, result); 
	result = a / b;
	printf("%d / %d = %d", a, b, result);
}
