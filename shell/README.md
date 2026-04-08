# Shell

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## MFE resources

- [Micro Frontends with Modern Angular – Part 1: Standalone and esbuild](https://www.angulararchitects.io/en/blog/micro-frontends-with-modern-angular-part-1-standalone-and-esbuild/)
- [How would you share state from the shell app to the microfrontends?](https://www.reddit.com/r/Angular2/comments/192g4ru/how_would_you_share_state_from_the_shell_app_to/)
- [How to make your AWS S3 Bucket and Objects Public](https://www.youtube.com/watch?v=s1Tu0yKmDKU)
- [Fix Not Secure & API Failures: How to Enable HTTPS in Angular](https://medium.com/@basel.issmail/fix-not-secure-api-failures-how-to-enable-https-in-angular-50c744662c40)
- [Proxying to a backend server](https://angular.dev/tools/cli/serve#proxying-to-a-backend-server)
  - 👆 Proxying DOES NOT WORK - you have to set CORS on S3
- [Mastering Cross-Tab Communication in Angular with BroadcastChannel API](https://medium.com/@md.mollaie/mastering-cross-tab-communication-in-angular-with-broadcastchannel-api-0e15ccef75bf)

## S3 Bucket Rules

### Block public access (bucket settings)
Turn off `Block all public access`

### Bucket Policy
```json
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "AllowPublicRead",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::[YOUR_BUCKET]/[DIST_DIR]/*"
        }
    ]
}
```

### Cross-origin resource sharing (CORS)
```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "HEAD"
        ],
        "AllowedOrigins": [
            "http://*",
            "https://*"
        ],
        "ExposeHeaders": [
            "Access-Control-Allow-Origin",
            "ETag"
        ],
        "MaxAgeSeconds": 3000
    }
]
```



## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
