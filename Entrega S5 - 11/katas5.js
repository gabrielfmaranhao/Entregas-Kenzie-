// getDiagonal()
// Crie uma função que receba uma matriz quadrada NxN e retorne 
//um vetor com sua diagonal principal.

// Por exemplo: matrizQuadrada3x3 = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ], saída => 1, 5, 9

function getDiagonal(matriz){
    let diagonal = []
    
    diagonal.push(matriz[0][0]);
    diagonal.push(matriz[1][1]);
    diagonal.push(matriz[2][2]);
    return diagonal
}
