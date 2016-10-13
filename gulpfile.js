const elixir require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir.config.publicPath = 'www';

elixir(mix => {
   mix.sass('app.scss')
    .webpack('app.js');
});


