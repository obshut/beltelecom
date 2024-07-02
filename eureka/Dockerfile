FROM openjdk:21-jdk-slim AS build

RUN apt-get update && apt-get install -y maven

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim

WORKDIR /app

COPY --from=build /app/target/*.jar /app/eureka-server.jar

EXPOSE 8761

ENTRYPOINT ["java", "-jar", "/app/eureka-server.jar"]
