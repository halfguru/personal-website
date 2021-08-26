FROM mcr.microsoft.com/dotnet/sdk:5.0 AS dotnet-build
WORKDIR /src
COPY . /src
RUN dotnet restore "personal-website.csproj"
RUN dotnet build "personal-website.csproj" -c Release -o /app/build

FROM dotnet-build AS dotnet-publish
RUN dotnet publish "personal-website.csproj" -c Release -o /app/publish

FROM node:latest as node-builder
WORKDIR /node
COPY ./frontend /node
RUN npm install
RUN npm run build

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS final
WORKDIR /app
EXPOSE 5000
ENV ASPNETCORE_URLS=http://+5000
RUN mkdir -p /app/frontend/build
COPY --from=dotnet-publish /app/publish .
COPY --from=node-builder /node/build ./frontend/build
ENTRYPOINT ["dotnet", "personal-website.dll"]