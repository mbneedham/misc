#include <stdio.h>
#include <assert.h>
#include <string.h>

#define NUMWINS 8
#define BOARDSIZE 9

int wins[NUMWINS][BOARDSIZE] = {
  1,1,1,
  0,0,0,
  0,0,0,
  
  0,0,0,
  1,1,1,
  0,0,0,
  
  0,0,0,
  0,0,0,
  1,1,1,

  1,0,0,
  1,0,0,
  1,0,0,
  
  0,1,0,
  0,1,0,
  0,1,0,
  
  0,0,1,
  0,0,1,
  0,0,1,
  
  1,0,0,
  0,1,0,
  0,0,1,
  
  0,0,1,
  0,1,0,
  1,0,0
};

void tic_tac_toe(int * gameboard){
  for (int i = 0; i < NUMWINS; i++){
    int winner = 0;
    for (int j = 0; j < BOARDSIZE; j++){
      if (wins[i][j] == 1){
	winner = (winner == gameboard[j] || winner == 0)?gameboard[j]:-1;
      }
    }
    if (winner == 1){
      printf("O's win\n");
      break;
    }else if (winner == 2){
      printf("X's win\n");
      break;
    }
  }
  return;
}

int main(int argc, char* argv[]){
  int gameboard[BOARDSIZE];
  if (argc > 1){
    if(strlen(argv[1]) == BOARDSIZE){
      for (int i = 0; i < BOARDSIZE; i++){
	gameboard[i] = (int)argv[1][i] - 48;
	assert(0 <= gameboard[i] && gameboard[i] <= 2);
      }
      tic_tac_toe(gameboard);  
    }
  }
}
