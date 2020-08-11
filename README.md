## Project deploy

### Verifique se está utilizando o projeto correto
```
firebase projects:list
```
Resposta:
| Project Display Name        | Project ID | Project Number |Resource Location ID |
| ------------- | ------------- | ------------- |-----:|
| ...      |  ... | ... | ... |
| datasquad-landingpage     |  **datasquad-landingpage (current)** | 746531009001 | [Not specified] |
| ...      |  ... | ... | ... |

Caso não esteja no projeto correto, utilize o comando:
```
firebase use datasquad-landingpage
```

### Faça o deploy
```
firebase deploy --only hosting