## Projeto API da trilha node RocketSeat

# CADASTRO DE CARRO

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar uma placa de um carro já cadastrado.
O carro deve ser cadastrado com padrão por disponibilidade.
O usuário responsável pelo cadastro deve ser um administrador.

# LISTAGEM DE CARROS

**RF**
Deve ser possível listar todos os carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.


**RN**
O usuário não precisa estar logado no sistema

# CADASTRO DE ESPECIFICAÇÃO DO CARRO

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser cadastrado uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um administrador.

# CADASTRO DE IMAGEM DO CARRO

**RF**
Deve ser possível cadastrar uma imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem do mesmo carro.
O usuário responsável pelo cadastro deve ser um administrador.

# ALUGUEL DE CARRO

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo carro.
