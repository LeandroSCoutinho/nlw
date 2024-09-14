import fastify from "fastify";
import { 
    serializerCompiler, 
    validatorCompiler, 
    type ZodTypeProvider 
} from "fastify-type-provider-zod";

import { createGoalRoute } from "./routes/create-gola";
import { createCompletionRoute } from "./routes/create-completion";
import { getPendingGoalRoute } from "./routes/get-pending-goal";
import { getWeekSummaryRoute } from "./routes/get-weeek-summary";
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(getPendingGoalRoute)
app.register(getWeekSummaryRoute)

app.listen({
    port: 3333,
}).then(() => {
    console.log("Server running in the port:3333");
});