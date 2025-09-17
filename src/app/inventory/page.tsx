import { prisma } from "@/lib/db";

export default async function RenderInventory() {
    const inventory = await prisma.inventory.findMany()
    return (
        <main>
            {inventory.map((item) => (item.name))}
        </main>
    )
}