#include <stdio.h>
#include <string.h>

void helper(char* s, int i){
  if (s[i] == '\0'){
    printf("%s\n", s);
  }else{
    for (int j = i; j < strlen(s); j++){
      char temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      helper(s, i+1);
      temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
  }
  return;
}

void generate_permutations(const char* input_string){
  char s[50];
  strcpy(s, input_string);
  helper(s, 0);
  return;
}

int main(int argc, char *argv[]){
  if (argc > 1){
    generate_permutations(argv[1]);
  }else{
    generate_permutations("Eyjafjallajokull");
  }
  return 1;
}
