// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
int GetMax(int arr[],int size){
    int max =0;
    for( int i=0;i<size;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

int GetMin(int arr[],int size){
    int min=0;
    for( int i=0;i<size;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
int main() {
    int size;
    cin>>size;
    int arr[100];
    for(int i=0;i<size;i++){
        cin>>arr[i];
        
    }
     cout<<"maxium element is"<<GetMax(arr, size)<<endl;
     cout<<"minimum element is"<<GetMin( arr, size)<<endl;
    return 0;
}