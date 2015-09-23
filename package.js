Package.describe({
  name: 'space:accounts-ui-semantic',
  version: '0.1.0',
  summary: 'Semantic-UI reference implementation of an space:accounts-ui admin interface.',
  git: 'https://github.com/meteor-space/accounts-ui-semantic.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.2.0.1');

  api.use([
    'coffeescript',
    'templating',
    'blaze-html-templates',
    'peerlibrary:blaze-components@0.13.0',
    'space:accounts-ui@0.1.0',
  ]);

  // CLIENT
  api.addFiles([
    'source/client/module.coffee',
    // Components
    'source/client/views/admin/admin-view.html',
    'source/client/views/admin/admin-view.coffee',
    'source/client/views/login/login-view.coffee',
    'source/client/views/login/login-view.html',
  ], 'client');

});
