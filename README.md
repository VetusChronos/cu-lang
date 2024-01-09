# Linguagem de Programação Cu

Cu é uma "linguagem de programação" simples, diferente e feita quando eu estava com tempo livre. Ela é escrita dentro de arquivos HTML, e é interpretada por um script JavaScript chamado `cu.js`.

## Como Usar

Para usar a linguagem Cu, você precisa incluir o script `cu.js` em seu arquivo HTML e escrever seu código dentro de tags HTML específicas. Todo o código Cu deve estar dentro de uma tag `<main>`.

## Sintaxe

### Funções

Para definir uma função, você deve usar a tag `<function>` com o atributo `name` para o nome da função. Os argumentos da função são representados pelos atributos adicionais na tag `<function>`. O corpo da função é escrito entre as tags `<function>` e `</function>`.

Exemplo:
```html
<function name="myFunction" arg1 arg2>
  <!-- Código da função aqui -->
</function>
```

### Condicionais

Para criar uma instrução condicional, você deve usar a tag `<if>` com o atributo `condition` para a condição. O corpo da instrução condicional é escrito entre as tags `<if>` e `</if>`.

Exemplo:
```html
<if condition="arg1 > arg2">
  <!-- Código a ser executado se a condição for verdadeira -->
</if>
```

### Retorno

Para retornar um valor de uma função, você deve usar a tag `<return>` com o atributo `value` para o valor a ser retornado.

Exemplo:
```html
<return value="arg1 + arg2" />
```

### Impressão

Para imprimir algo no console, você deve usar a tag `<print>` com o atributo `value` para o valor a ser impresso.

Exemplo:
```html
<print value="Hello, world!" />
```

## Exemplo de Código

Aqui está um exemplo de um programa Cu que calcula o enésimo número na sequência de Fibonacci:

```html
<script src="cu.js"></script>
<main>
    <function name="fib" n>
        <if condition="n < 2">
            <return value="n" />
        </if>

        <return value="fib(n - 1) + fib(n - 2)" />
    </function>
    
    <print value="fib(20)" />
</main>
```

> Este programa define uma função `fib` que calcula o enésimo número na sequência de Fibonacci e, em seguida, imprime o 20º número na sequência.