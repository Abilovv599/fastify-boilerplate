import fp from "fastify-plugin";

export default fp(async (fastify) => {
  fastify.register(import("@fastify/swagger"));
  fastify.register(import("@scalar/fastify-api-reference"), {
    routePrefix: "/docs",
      configuration: {
        darkMode: true,
          theme: 'bluePlanet',
      }
  });
});
