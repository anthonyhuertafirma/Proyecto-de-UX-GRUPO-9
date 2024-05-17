FROM mcr.microsoft.com/openjdk/jdk:21-ubuntu
ARG JAR_FILE=target/restaurant-0.0.1.jar
COPY ${JAR_FILE} app_restaurante.jar
ENTRYPOINT ["java", "-jar", "app_restaurante.jar"]