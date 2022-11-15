#include <iostream>

int main() {

  // int x{1958516461};
  // std::cout << x << std::endl;
  // std::cout << &x << std::endl;

  // int *ptr = new int{};
  // std::cout << *ptr << std::endl;

  // int *ptr = new int[6]{};
  // std::cout << *ptr << std::endl;
  // delete[] ptr;

  // int *ptr = new int[6]{1,2,3,4};
  // for (int i = 0; i < 6; i++) {
  //   std::cout << ptr[i] << ' ' ;
  // }
  // delete[] ptr;

  // stack buffer overflow when you put more than the expected number of characters
  char address[15];
  char name[4];
  std::cout << address;
  std::cin.getline(address, '\n');
  std::cout << name;
  std::cin.getline(name, '\n');

  std::cout << "Name:" << name << std::endl;
  std::cout << "Address:" << address << std::endl;


}