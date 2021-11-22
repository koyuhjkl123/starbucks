# include<stdio.h>

int main()
{
	int a; // a라는 변수 선언
	int b;// b라는 변수 선언
	int result;// result라는 변수 선언

	a = 100; // 100의 의미는 변수의 값 / 100을 "a"에 대입
	b = 50; // 50의 의미는 변수의 값 / 50을 "b"에 대입
	
	result = a + b;
	printf("%d + %d = %d\n", a, b, result); // 정수 서식에 변수 a, b, result를 대입하라 /
	result = a - b;
	printf("%d - %d = %d\n", a, b, result);
	result = a * b;
	printf("%d * %d = %d\n", a, b, result); 
	result = a / b;
	printf("%d / %d = %d", a, b, result);
}
