<h1> Desafio Técnico ME </h1> 

<p> Desafio proposto por uma empresa de Informação Educacional </p> 

<h2> Descrição do desafio: </h2>

<h3> - Página temática </h3>

<p> O primeiro desafio é a construção de uma página temática. O objetivo deste exercício é conhecermos suas habilidades com HTML, CSS e de construção de landing pages. </p>

<h3> - Página Tabela </h3>

<p> O objetivo desta página é conhecermos suas habilidades com CSS, HTML e pequenas interações javascripts. </p>

<h2>Como Acessar:</h2>

<p> O mesmo poderá ser baixado pelo github e executado através dos arquivos: "desafio01.html", "desafio02.html".</p>

<p> Para um acesso mais rápido e teste eu criei um link em um servidor pessoal.</p>

<ul>
  <li> <b> Desafio 01:  </b> <a href="http://104.131.165.126/desafio-meritt/desafio01.html" target="_blank"> http://104.131.165.126/desafio-meritt/desafio01.html </a> </li>
  <li> <b> Desafio 02:  </b> <a href="http://104.131.165.126/desafio-meritt/desafio02.html" target="_blank"> http://104.131.165.126/desafio-meritt/desafio02.html </a> </li>
</ul>

<h2> Estrutura: </h2>

<p>Os dois projetos estão dentro da mesma estrutura. </p>

<ul>
  <li>
   -> Pasta CSS:
    <ul>
      <li> - Pasta Less ( Main.Less, Responsive.Less - Arquivos principais para estrutura da página ).</li>
      <li> - Pasta Vendor ( Plugins utilizados na páginas).</li>
      <li> - Plugin.min.css ( Utilizei o grunt para concatenar e minificar os plugins).</li>
      <li> - Style.less ( Arquivo utilizado pelas paginas, utilizei grunt para conveter less para css, concatenar e minificar os arquivos).</li>
    </ul>
  </li>
  <li>->Pasta Fonts ( Utilizei a mesma font que esta no site da empresa ). </li>
  <li>->Pasta Img ( Utilizei SVG para criar a logo e assim garanto a qualidade em todos dispositivos ). </li>
  
    <li>
   -> Pasta JS:
    <ul>
      <li> - Pasta Data ( dados-edeb-santa-catarina.json - dados jSon utilizados na Tabela. ).</li>
      <li> - Pasta Vendor ( Plugins utilizados na páginas).</li>
      <li> - page01.js ( Scripts criados para o Desafio 01).</li>
      <li> - page02.js ( Scripts criados para o Desafio 02).</li>
    </ul>
  </li>
  
  <li> desafio01.html ( arquivo html de acesso ao primeiro desafio).</li>
  <li> desafio02.html ( arquivo html de acesso ao segundo desafio).</li>
  <li> gruntfile.js ( arquivo de configuração do Grunt.Js).</li>
  <li>package.json ( npm init )</li>
</ul>

