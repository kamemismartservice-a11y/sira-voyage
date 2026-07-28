-- CreateTable
CREATE TABLE "ServiceCategory" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceItem" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "image" TEXT,
    "icon" TEXT,
    "badge" TEXT,
    "price" TEXT NOT NULL,
    "priceGridQuad" TEXT,
    "priceGridTriple" TEXT,
    "priceGridDouble" TEXT,
    "priceGridIndividuelle" TEXT,
    "tags" TEXT,

    CONSTRAINT "ServiceItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmraSession" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "periode" TEXT NOT NULL,
    "duree" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "quad" TEXT,
    "triple" TEXT NOT NULL,
    "double" TEXT NOT NULL,
    "individuelle" TEXT NOT NULL,

    CONSTRAINT "OmraSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceCategory_slug_key" ON "ServiceCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceItem_categoryId_slug_key" ON "ServiceItem"("categoryId", "slug");

-- AddForeignKey
ALTER TABLE "ServiceItem" ADD CONSTRAINT "ServiceItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ServiceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmraSession" ADD CONSTRAINT "OmraSession_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "ServiceItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
