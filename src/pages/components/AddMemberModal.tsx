import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {Select, SelectItem, Chip} from "@nextui-org/react";

export default function MemberModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    //Get labels from API. Style chips programmatically. Colors should be consistent accross renders.
    const labels = [
        {label: <Chip color="primary">Smart</Chip>, value: "Smart"}, 
        {label: <Chip color="secondary">Average</Chip>, value: "Average"}, 
        {label: <Chip color="success">Idiot</Chip>, value: "Idiot"}, 
        {label: <Chip color="danger">More</Chip>, value: "poo"},
        {label: <Chip color="danger">More More</Chip>, value: "a"},
        {label: <Chip color="danger">More^3</Chip>, value: "Bb"},
        {label: <Chip color="danger">Work</Chip>, value: "Btudent"},
        {label: <Chip color="danger">So many roles wow so good</Chip>, value: "Busineent"}
    ]

    return (
        <>
            <Button onPress={onOpen} color="primary">Open Modal</Button>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Add Member</ModalHeader>
                    <ModalBody>
                        <Input
                            autoFocus
                            endContent={
                                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Email"
                            variant="bordered"
                        />
                        <Input
                            label="First name"
                            variant="bordered"
                        />
                        <Input
                            label="Last name"
                            variant="bordered"
                        />
                        <label className="text-sm mb-0">Labels</label>
                        <Select
                            items={labels}
                            selectionMode="multiple"
                            isMultiline={true}
                            className="mt-0"
                            size="lg"
                            classNames={{
                                base: "max-w-xs",
                                trigger: "min-h-unit-8",
                                innerWrapper: "pt-1 pb-1"
                            }}
                            renderValue={(items) => {
                                return (
                                <div className="flex flex-wrap gap-2">
                                    {items.map((item) => (
                                    <div key={item.key}>{item.rendered}</div>
                                    ))}
                                </div>
                                );
                            }}
                        >
                            {labels.map((l) => (
                                <SelectItem key={l.value}>
                                    {l.label}
                                </SelectItem>
                            ))}
                        </Select>
                        <div className="flex py-2 px-1 justify-between"></div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>Close</Button>
                        <Button color="primary" onPress={onClose}>Make Members</Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
  );
}
