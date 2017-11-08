'use strict'
const puppeteer = require( "puppeteer" );
const Chance = require('chance');

describe('Formulário de Cadastro', async ()=>{
  
  
  it('Cadastrar um novo usuário', async()=>{
    const browser = await puppeteer.launch({
      headless:false,
      slowMo: 5,
      args: ['--window-size=1920,1080']
    });

    const page =  await browser.newPage();
    page.setViewport({width: 1920, height: 1080});
    
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
    
    await page.type('#id_cep', '11320130');
    await page.type('#id_numero', '1');

    await page.waitForFunction('$("#id_endereco").val().length');
    await page.click('button.botao.principal');
    await page.waitForSelector('#corpo > div > div.alert.alert-success.alert-geral');

    const mensagemCriacaoUsuario = await page.$eval('#corpo > div > div.alert.alert-success.alert-geral', el => el.textContent);
    console.log(mensagemCriacaoUsuario);
    expect(mensagemCriacaoUsuario).toContain('Cliente criado com sucesso.');

    await browser.close();
  }, 16000);
});