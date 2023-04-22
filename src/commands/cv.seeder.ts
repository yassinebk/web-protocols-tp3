import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { GestionnaireCVSeeder } from "../gestionnaire-cv/gestionnaire-cv-seeder.service";

async function bootstrap() {
    
    const app = await NestFactory.createApplicationContext(AppModule);

    const gestionnaireCVSeeder = app.get(GestionnaireCVSeeder);

    

    await gestionnaireCVSeeder.seedDatabase(100).then(() => {
        console.log("done");
        app.close();

    })

}

bootstrap()
