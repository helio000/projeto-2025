-- CreateTable
CREATE TABLE `aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(20) NOT NULL,
    `datanasc` DATE NOT NULL,
    `arteMarcial` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `aluno_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `matricula` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alunoId` INTEGER NOT NULL,
    `turmaId` INTEGER NOT NULL,
    `dataMatricula` DATE NULL DEFAULT (curdate()),

    INDEX `alunoId`(`alunoId`),
    INDEX `turmaId`(`turmaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `professor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(20) NULL,
    `arteMarcial` VARCHAR(50) NULL,

    UNIQUE INDEX `professor_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `arteMarcial` VARCHAR(50) NULL,
    `professorId` INTEGER NULL,

    INDEX `professorId`(`professorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `matricula` ADD CONSTRAINT `matricula_ibfk_1` FOREIGN KEY (`alunoId`) REFERENCES `aluno`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `matricula` ADD CONSTRAINT `matricula_ibfk_2` FOREIGN KEY (`turmaId`) REFERENCES `turma`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `turma` ADD CONSTRAINT `turma_ibfk_1` FOREIGN KEY (`professorId`) REFERENCES `professor`(`id`) ON DELETE SET NULL ON UPDATE RESTRICT;
