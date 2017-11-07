'use strict'
const puppeteer = require( "puppeteer" );
const Chance = require('chance');

// let browser;

beforeAll(async()=>{
  
});

afterAll(()=>{
  // browser.close();
});

describe('Formulário de Cadastro', async ()=>{
  
  
  it('Cadastrar um novo usuário', async()=>{
    const browser = await puppeteer.launch({
      headless:false
    });

    const page =  await browser.newPage();
    const email = chance.email({domain:'concrete.com.br'});
    const senha = 'teste1234';
    
    await page.goto('https://myapp.lojaintegrada.com.br/conta/login?next=/conta/index');
    await page.type('input#id_email.span8', email);
    await page.click('#corpo > div > div.cadastro > div.cadastro-logar.row-fluid > div:nth-child(2) > div > form > fieldset > div > button');
    
    await page.waitForSelector("#formCadastroCompleto");
    
    await page.type('#id_confirmacao_email', email);

    await page.type('#id_senha', senha);
    await page.type('#id_confirmacao_senha', senha);

    await page.type('#id_nome', chance.name());
    await page.type('#id_cpf', chance.cpf());
    await page.type('#id_telefone_celular', '(12)12345-6789');
    await page.type('#id_telefone_principal', '(12)6789-1234');
    await page.type('#id_sexo', 'm');
    await page.type('#id_data_nascimento', '01/01/1999');
    
    await page.type('#id_cep', '11320-130');
    await page.type('#id_numero', '1');

    await page.click('button.botao.principal');



    await browser.close();
  });
});