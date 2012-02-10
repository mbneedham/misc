#include <stdio.h>
#include <string.h>
#include <assert.h>

void swap(char * s, int i, int j){
      char temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      return;
}

void helper(char* s, int i){
  if (s[i] == '\0'){
    printf("%s\n", s);
  }else{
    int l = strlen(s);
    for (int j = i; j < l; j++){
      swap(s, i, j);
      helper(s, i+1);
      swap(s, i, j);
    }
  }
  return;
}

void generate_permutations(const char* input_string){
  assert(strlen(input_string) < 50);
  char s[50];
  strcpy(s, input_string);
  helper(s, 0);
  return;
}

int main(int argc, char *argv[]){
  if (argc > 1){
    generate_permutations(argv[1]);
  }
  return 1;
}
