## Projeto API da trilha node RocketSeat - RentX

# CADASTRO DE CARRO

**RF**
Deve ser possível cadastrar um novo carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado com padrão por disponibilidade.
* O usuário responsável pelo cadastro deve ser um administrador.

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
O usuário deve estar logado na aplicação.
Ao realizar o aluguel, o status do carro deverá ser alterado para indisponível.

# DEVOLUÇÃO DE CARRO

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas deve ser cobrado a diária completa
Ao realizar a devolução de um carro, este deverá ser liberado para outro aluguel
Ao realizar a devolução de um carro, o usuário deverá ser liberado para outro aluguel
Ao realizar a devolução de um carro, deverá calcular o valor total do aluguel
Caso o horário de devolução seja superior ao horário previsto de entrega deverá ser cobrado multa proporcional as horas ou dias em atraso.
O usuário deverá estar logado na aplicação.
Caso haja multa deverá ser somando o valor do aluguel.

**RF**
Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
O usuário deve estar logado na aplicação
